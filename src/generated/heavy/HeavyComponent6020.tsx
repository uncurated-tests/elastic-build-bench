'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6020<T> = T extends (infer U)[]
  ? DeepReadonlyArray6020<U>
  : T extends object
  ? DeepReadonlyObject6020<T>
  : T;

interface DeepReadonlyArray6020<T> extends ReadonlyArray<DeepReadonly6020<T>> {}

type DeepReadonlyObject6020<T> = {
  readonly [P in keyof T]: DeepReadonly6020<T[P]>;
};

type UnionToIntersection6020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6020<T> = UnionToIntersection6020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6020<T extends unknown[], V> = [...T, V];

type TuplifyUnion6020<T, L = LastOf6020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6020<TuplifyUnion6020<Exclude<T, L>>, L>;

type DeepPartial6020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6020<T[P]> }
  : T;

type Paths6020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6020<K, Paths6020<T[K], Prev6020[D]>> : never }[keyof T]
  : never;

type Prev6020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6020 {
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

type ConfigPaths6020 = Paths6020<NestedConfig6020>;

interface HeavyProps6020 {
  config: DeepPartial6020<NestedConfig6020>;
  path?: ConfigPaths6020;
}

const HeavyComponent6020 = memo(function HeavyComponent6020({ config }: HeavyProps6020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6020.displayName = 'HeavyComponent6020';
export default HeavyComponent6020;
