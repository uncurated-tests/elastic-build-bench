'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3525<T> = T extends (infer U)[]
  ? DeepReadonlyArray3525<U>
  : T extends object
  ? DeepReadonlyObject3525<T>
  : T;

interface DeepReadonlyArray3525<T> extends ReadonlyArray<DeepReadonly3525<T>> {}

type DeepReadonlyObject3525<T> = {
  readonly [P in keyof T]: DeepReadonly3525<T[P]>;
};

type UnionToIntersection3525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3525<T> = UnionToIntersection3525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3525<T extends unknown[], V> = [...T, V];

type TuplifyUnion3525<T, L = LastOf3525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3525<TuplifyUnion3525<Exclude<T, L>>, L>;

type DeepPartial3525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3525<T[P]> }
  : T;

type Paths3525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3525<K, Paths3525<T[K], Prev3525[D]>> : never }[keyof T]
  : never;

type Prev3525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3525 {
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

type ConfigPaths3525 = Paths3525<NestedConfig3525>;

interface HeavyProps3525 {
  config: DeepPartial3525<NestedConfig3525>;
  path?: ConfigPaths3525;
}

const HeavyComponent3525 = memo(function HeavyComponent3525({ config }: HeavyProps3525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3525.displayName = 'HeavyComponent3525';
export default HeavyComponent3525;
