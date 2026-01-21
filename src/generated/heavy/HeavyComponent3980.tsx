'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3980<T> = T extends (infer U)[]
  ? DeepReadonlyArray3980<U>
  : T extends object
  ? DeepReadonlyObject3980<T>
  : T;

interface DeepReadonlyArray3980<T> extends ReadonlyArray<DeepReadonly3980<T>> {}

type DeepReadonlyObject3980<T> = {
  readonly [P in keyof T]: DeepReadonly3980<T[P]>;
};

type UnionToIntersection3980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3980<T> = UnionToIntersection3980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3980<T extends unknown[], V> = [...T, V];

type TuplifyUnion3980<T, L = LastOf3980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3980<TuplifyUnion3980<Exclude<T, L>>, L>;

type DeepPartial3980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3980<T[P]> }
  : T;

type Paths3980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3980<K, Paths3980<T[K], Prev3980[D]>> : never }[keyof T]
  : never;

type Prev3980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3980 {
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

type ConfigPaths3980 = Paths3980<NestedConfig3980>;

interface HeavyProps3980 {
  config: DeepPartial3980<NestedConfig3980>;
  path?: ConfigPaths3980;
}

const HeavyComponent3980 = memo(function HeavyComponent3980({ config }: HeavyProps3980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3980.displayName = 'HeavyComponent3980';
export default HeavyComponent3980;
