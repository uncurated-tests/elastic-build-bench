'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14384<T> = T extends (infer U)[]
  ? DeepReadonlyArray14384<U>
  : T extends object
  ? DeepReadonlyObject14384<T>
  : T;

interface DeepReadonlyArray14384<T> extends ReadonlyArray<DeepReadonly14384<T>> {}

type DeepReadonlyObject14384<T> = {
  readonly [P in keyof T]: DeepReadonly14384<T[P]>;
};

type UnionToIntersection14384<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14384<T> = UnionToIntersection14384<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14384<T extends unknown[], V> = [...T, V];

type TuplifyUnion14384<T, L = LastOf14384<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14384<TuplifyUnion14384<Exclude<T, L>>, L>;

type DeepPartial14384<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14384<T[P]> }
  : T;

type Paths14384<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14384<K, Paths14384<T[K], Prev14384[D]>> : never }[keyof T]
  : never;

type Prev14384 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14384<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14384 {
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

type ConfigPaths14384 = Paths14384<NestedConfig14384>;

interface HeavyProps14384 {
  config: DeepPartial14384<NestedConfig14384>;
  path?: ConfigPaths14384;
}

const HeavyComponent14384 = memo(function HeavyComponent14384({ config }: HeavyProps14384) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14384) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14384 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14384: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14384.displayName = 'HeavyComponent14384';
export default HeavyComponent14384;
