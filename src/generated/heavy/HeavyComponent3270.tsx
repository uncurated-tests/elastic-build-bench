'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3270<T> = T extends (infer U)[]
  ? DeepReadonlyArray3270<U>
  : T extends object
  ? DeepReadonlyObject3270<T>
  : T;

interface DeepReadonlyArray3270<T> extends ReadonlyArray<DeepReadonly3270<T>> {}

type DeepReadonlyObject3270<T> = {
  readonly [P in keyof T]: DeepReadonly3270<T[P]>;
};

type UnionToIntersection3270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3270<T> = UnionToIntersection3270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3270<T extends unknown[], V> = [...T, V];

type TuplifyUnion3270<T, L = LastOf3270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3270<TuplifyUnion3270<Exclude<T, L>>, L>;

type DeepPartial3270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3270<T[P]> }
  : T;

type Paths3270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3270<K, Paths3270<T[K], Prev3270[D]>> : never }[keyof T]
  : never;

type Prev3270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3270 {
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

type ConfigPaths3270 = Paths3270<NestedConfig3270>;

interface HeavyProps3270 {
  config: DeepPartial3270<NestedConfig3270>;
  path?: ConfigPaths3270;
}

const HeavyComponent3270 = memo(function HeavyComponent3270({ config }: HeavyProps3270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3270.displayName = 'HeavyComponent3270';
export default HeavyComponent3270;
