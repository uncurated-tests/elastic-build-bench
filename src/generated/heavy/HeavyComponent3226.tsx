'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3226<T> = T extends (infer U)[]
  ? DeepReadonlyArray3226<U>
  : T extends object
  ? DeepReadonlyObject3226<T>
  : T;

interface DeepReadonlyArray3226<T> extends ReadonlyArray<DeepReadonly3226<T>> {}

type DeepReadonlyObject3226<T> = {
  readonly [P in keyof T]: DeepReadonly3226<T[P]>;
};

type UnionToIntersection3226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3226<T> = UnionToIntersection3226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3226<T extends unknown[], V> = [...T, V];

type TuplifyUnion3226<T, L = LastOf3226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3226<TuplifyUnion3226<Exclude<T, L>>, L>;

type DeepPartial3226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3226<T[P]> }
  : T;

type Paths3226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3226<K, Paths3226<T[K], Prev3226[D]>> : never }[keyof T]
  : never;

type Prev3226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3226 {
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

type ConfigPaths3226 = Paths3226<NestedConfig3226>;

interface HeavyProps3226 {
  config: DeepPartial3226<NestedConfig3226>;
  path?: ConfigPaths3226;
}

const HeavyComponent3226 = memo(function HeavyComponent3226({ config }: HeavyProps3226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3226.displayName = 'HeavyComponent3226';
export default HeavyComponent3226;
