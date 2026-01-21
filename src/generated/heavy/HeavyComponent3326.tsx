'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3326<T> = T extends (infer U)[]
  ? DeepReadonlyArray3326<U>
  : T extends object
  ? DeepReadonlyObject3326<T>
  : T;

interface DeepReadonlyArray3326<T> extends ReadonlyArray<DeepReadonly3326<T>> {}

type DeepReadonlyObject3326<T> = {
  readonly [P in keyof T]: DeepReadonly3326<T[P]>;
};

type UnionToIntersection3326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3326<T> = UnionToIntersection3326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3326<T extends unknown[], V> = [...T, V];

type TuplifyUnion3326<T, L = LastOf3326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3326<TuplifyUnion3326<Exclude<T, L>>, L>;

type DeepPartial3326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3326<T[P]> }
  : T;

type Paths3326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3326<K, Paths3326<T[K], Prev3326[D]>> : never }[keyof T]
  : never;

type Prev3326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3326 {
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

type ConfigPaths3326 = Paths3326<NestedConfig3326>;

interface HeavyProps3326 {
  config: DeepPartial3326<NestedConfig3326>;
  path?: ConfigPaths3326;
}

const HeavyComponent3326 = memo(function HeavyComponent3326({ config }: HeavyProps3326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3326.displayName = 'HeavyComponent3326';
export default HeavyComponent3326;
