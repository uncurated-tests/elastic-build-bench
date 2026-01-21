'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3265<T> = T extends (infer U)[]
  ? DeepReadonlyArray3265<U>
  : T extends object
  ? DeepReadonlyObject3265<T>
  : T;

interface DeepReadonlyArray3265<T> extends ReadonlyArray<DeepReadonly3265<T>> {}

type DeepReadonlyObject3265<T> = {
  readonly [P in keyof T]: DeepReadonly3265<T[P]>;
};

type UnionToIntersection3265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3265<T> = UnionToIntersection3265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3265<T extends unknown[], V> = [...T, V];

type TuplifyUnion3265<T, L = LastOf3265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3265<TuplifyUnion3265<Exclude<T, L>>, L>;

type DeepPartial3265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3265<T[P]> }
  : T;

type Paths3265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3265<K, Paths3265<T[K], Prev3265[D]>> : never }[keyof T]
  : never;

type Prev3265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3265 {
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

type ConfigPaths3265 = Paths3265<NestedConfig3265>;

interface HeavyProps3265 {
  config: DeepPartial3265<NestedConfig3265>;
  path?: ConfigPaths3265;
}

const HeavyComponent3265 = memo(function HeavyComponent3265({ config }: HeavyProps3265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3265.displayName = 'HeavyComponent3265';
export default HeavyComponent3265;
