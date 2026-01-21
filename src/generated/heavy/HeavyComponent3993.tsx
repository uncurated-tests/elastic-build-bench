'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3993<T> = T extends (infer U)[]
  ? DeepReadonlyArray3993<U>
  : T extends object
  ? DeepReadonlyObject3993<T>
  : T;

interface DeepReadonlyArray3993<T> extends ReadonlyArray<DeepReadonly3993<T>> {}

type DeepReadonlyObject3993<T> = {
  readonly [P in keyof T]: DeepReadonly3993<T[P]>;
};

type UnionToIntersection3993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3993<T> = UnionToIntersection3993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3993<T extends unknown[], V> = [...T, V];

type TuplifyUnion3993<T, L = LastOf3993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3993<TuplifyUnion3993<Exclude<T, L>>, L>;

type DeepPartial3993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3993<T[P]> }
  : T;

type Paths3993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3993<K, Paths3993<T[K], Prev3993[D]>> : never }[keyof T]
  : never;

type Prev3993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3993 {
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

type ConfigPaths3993 = Paths3993<NestedConfig3993>;

interface HeavyProps3993 {
  config: DeepPartial3993<NestedConfig3993>;
  path?: ConfigPaths3993;
}

const HeavyComponent3993 = memo(function HeavyComponent3993({ config }: HeavyProps3993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3993.displayName = 'HeavyComponent3993';
export default HeavyComponent3993;
