'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3475<T> = T extends (infer U)[]
  ? DeepReadonlyArray3475<U>
  : T extends object
  ? DeepReadonlyObject3475<T>
  : T;

interface DeepReadonlyArray3475<T> extends ReadonlyArray<DeepReadonly3475<T>> {}

type DeepReadonlyObject3475<T> = {
  readonly [P in keyof T]: DeepReadonly3475<T[P]>;
};

type UnionToIntersection3475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3475<T> = UnionToIntersection3475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3475<T extends unknown[], V> = [...T, V];

type TuplifyUnion3475<T, L = LastOf3475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3475<TuplifyUnion3475<Exclude<T, L>>, L>;

type DeepPartial3475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3475<T[P]> }
  : T;

type Paths3475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3475<K, Paths3475<T[K], Prev3475[D]>> : never }[keyof T]
  : never;

type Prev3475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3475 {
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

type ConfigPaths3475 = Paths3475<NestedConfig3475>;

interface HeavyProps3475 {
  config: DeepPartial3475<NestedConfig3475>;
  path?: ConfigPaths3475;
}

const HeavyComponent3475 = memo(function HeavyComponent3475({ config }: HeavyProps3475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3475.displayName = 'HeavyComponent3475';
export default HeavyComponent3475;
