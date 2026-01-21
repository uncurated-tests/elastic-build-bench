'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3857<T> = T extends (infer U)[]
  ? DeepReadonlyArray3857<U>
  : T extends object
  ? DeepReadonlyObject3857<T>
  : T;

interface DeepReadonlyArray3857<T> extends ReadonlyArray<DeepReadonly3857<T>> {}

type DeepReadonlyObject3857<T> = {
  readonly [P in keyof T]: DeepReadonly3857<T[P]>;
};

type UnionToIntersection3857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3857<T> = UnionToIntersection3857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3857<T extends unknown[], V> = [...T, V];

type TuplifyUnion3857<T, L = LastOf3857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3857<TuplifyUnion3857<Exclude<T, L>>, L>;

type DeepPartial3857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3857<T[P]> }
  : T;

type Paths3857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3857<K, Paths3857<T[K], Prev3857[D]>> : never }[keyof T]
  : never;

type Prev3857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3857 {
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

type ConfigPaths3857 = Paths3857<NestedConfig3857>;

interface HeavyProps3857 {
  config: DeepPartial3857<NestedConfig3857>;
  path?: ConfigPaths3857;
}

const HeavyComponent3857 = memo(function HeavyComponent3857({ config }: HeavyProps3857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3857.displayName = 'HeavyComponent3857';
export default HeavyComponent3857;
