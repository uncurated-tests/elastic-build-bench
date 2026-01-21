'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6445<T> = T extends (infer U)[]
  ? DeepReadonlyArray6445<U>
  : T extends object
  ? DeepReadonlyObject6445<T>
  : T;

interface DeepReadonlyArray6445<T> extends ReadonlyArray<DeepReadonly6445<T>> {}

type DeepReadonlyObject6445<T> = {
  readonly [P in keyof T]: DeepReadonly6445<T[P]>;
};

type UnionToIntersection6445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6445<T> = UnionToIntersection6445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6445<T extends unknown[], V> = [...T, V];

type TuplifyUnion6445<T, L = LastOf6445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6445<TuplifyUnion6445<Exclude<T, L>>, L>;

type DeepPartial6445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6445<T[P]> }
  : T;

type Paths6445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6445<K, Paths6445<T[K], Prev6445[D]>> : never }[keyof T]
  : never;

type Prev6445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6445 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths6445 = Paths6445<NestedConfig6445>;

interface HeavyProps6445 {
  config: DeepPartial6445<NestedConfig6445>;
  path?: ConfigPaths6445;
}

const HeavyComponent6445 = memo(function HeavyComponent6445({ config }: HeavyProps6445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6445.displayName = 'HeavyComponent6445';
export default HeavyComponent6445;
