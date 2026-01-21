'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3407<T> = T extends (infer U)[]
  ? DeepReadonlyArray3407<U>
  : T extends object
  ? DeepReadonlyObject3407<T>
  : T;

interface DeepReadonlyArray3407<T> extends ReadonlyArray<DeepReadonly3407<T>> {}

type DeepReadonlyObject3407<T> = {
  readonly [P in keyof T]: DeepReadonly3407<T[P]>;
};

type UnionToIntersection3407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3407<T> = UnionToIntersection3407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3407<T extends unknown[], V> = [...T, V];

type TuplifyUnion3407<T, L = LastOf3407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3407<TuplifyUnion3407<Exclude<T, L>>, L>;

type DeepPartial3407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3407<T[P]> }
  : T;

type Paths3407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3407<K, Paths3407<T[K], Prev3407[D]>> : never }[keyof T]
  : never;

type Prev3407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3407 {
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

type ConfigPaths3407 = Paths3407<NestedConfig3407>;

interface HeavyProps3407 {
  config: DeepPartial3407<NestedConfig3407>;
  path?: ConfigPaths3407;
}

const HeavyComponent3407 = memo(function HeavyComponent3407({ config }: HeavyProps3407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3407.displayName = 'HeavyComponent3407';
export default HeavyComponent3407;
