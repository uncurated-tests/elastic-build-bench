'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6766<T> = T extends (infer U)[]
  ? DeepReadonlyArray6766<U>
  : T extends object
  ? DeepReadonlyObject6766<T>
  : T;

interface DeepReadonlyArray6766<T> extends ReadonlyArray<DeepReadonly6766<T>> {}

type DeepReadonlyObject6766<T> = {
  readonly [P in keyof T]: DeepReadonly6766<T[P]>;
};

type UnionToIntersection6766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6766<T> = UnionToIntersection6766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6766<T extends unknown[], V> = [...T, V];

type TuplifyUnion6766<T, L = LastOf6766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6766<TuplifyUnion6766<Exclude<T, L>>, L>;

type DeepPartial6766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6766<T[P]> }
  : T;

type Paths6766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6766<K, Paths6766<T[K], Prev6766[D]>> : never }[keyof T]
  : never;

type Prev6766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6766 {
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

type ConfigPaths6766 = Paths6766<NestedConfig6766>;

interface HeavyProps6766 {
  config: DeepPartial6766<NestedConfig6766>;
  path?: ConfigPaths6766;
}

const HeavyComponent6766 = memo(function HeavyComponent6766({ config }: HeavyProps6766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6766.displayName = 'HeavyComponent6766';
export default HeavyComponent6766;
