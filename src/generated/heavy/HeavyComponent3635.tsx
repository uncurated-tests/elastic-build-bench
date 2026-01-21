'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3635<T> = T extends (infer U)[]
  ? DeepReadonlyArray3635<U>
  : T extends object
  ? DeepReadonlyObject3635<T>
  : T;

interface DeepReadonlyArray3635<T> extends ReadonlyArray<DeepReadonly3635<T>> {}

type DeepReadonlyObject3635<T> = {
  readonly [P in keyof T]: DeepReadonly3635<T[P]>;
};

type UnionToIntersection3635<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3635<T> = UnionToIntersection3635<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3635<T extends unknown[], V> = [...T, V];

type TuplifyUnion3635<T, L = LastOf3635<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3635<TuplifyUnion3635<Exclude<T, L>>, L>;

type DeepPartial3635<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3635<T[P]> }
  : T;

type Paths3635<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3635<K, Paths3635<T[K], Prev3635[D]>> : never }[keyof T]
  : never;

type Prev3635 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3635<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3635 {
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

type ConfigPaths3635 = Paths3635<NestedConfig3635>;

interface HeavyProps3635 {
  config: DeepPartial3635<NestedConfig3635>;
  path?: ConfigPaths3635;
}

const HeavyComponent3635 = memo(function HeavyComponent3635({ config }: HeavyProps3635) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3635) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3635 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3635: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3635.displayName = 'HeavyComponent3635';
export default HeavyComponent3635;
