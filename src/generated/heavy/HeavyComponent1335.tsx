'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1335<T> = T extends (infer U)[]
  ? DeepReadonlyArray1335<U>
  : T extends object
  ? DeepReadonlyObject1335<T>
  : T;

interface DeepReadonlyArray1335<T> extends ReadonlyArray<DeepReadonly1335<T>> {}

type DeepReadonlyObject1335<T> = {
  readonly [P in keyof T]: DeepReadonly1335<T[P]>;
};

type UnionToIntersection1335<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1335<T> = UnionToIntersection1335<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1335<T extends unknown[], V> = [...T, V];

type TuplifyUnion1335<T, L = LastOf1335<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1335<TuplifyUnion1335<Exclude<T, L>>, L>;

type DeepPartial1335<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1335<T[P]> }
  : T;

type Paths1335<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1335<K, Paths1335<T[K], Prev1335[D]>> : never }[keyof T]
  : never;

type Prev1335 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1335<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1335 {
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

type ConfigPaths1335 = Paths1335<NestedConfig1335>;

interface HeavyProps1335 {
  config: DeepPartial1335<NestedConfig1335>;
  path?: ConfigPaths1335;
}

const HeavyComponent1335 = memo(function HeavyComponent1335({ config }: HeavyProps1335) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1335) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1335 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1335: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1335.displayName = 'HeavyComponent1335';
export default HeavyComponent1335;
