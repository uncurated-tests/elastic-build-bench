'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14532<T> = T extends (infer U)[]
  ? DeepReadonlyArray14532<U>
  : T extends object
  ? DeepReadonlyObject14532<T>
  : T;

interface DeepReadonlyArray14532<T> extends ReadonlyArray<DeepReadonly14532<T>> {}

type DeepReadonlyObject14532<T> = {
  readonly [P in keyof T]: DeepReadonly14532<T[P]>;
};

type UnionToIntersection14532<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14532<T> = UnionToIntersection14532<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14532<T extends unknown[], V> = [...T, V];

type TuplifyUnion14532<T, L = LastOf14532<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14532<TuplifyUnion14532<Exclude<T, L>>, L>;

type DeepPartial14532<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14532<T[P]> }
  : T;

type Paths14532<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14532<K, Paths14532<T[K], Prev14532[D]>> : never }[keyof T]
  : never;

type Prev14532 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14532<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14532 {
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

type ConfigPaths14532 = Paths14532<NestedConfig14532>;

interface HeavyProps14532 {
  config: DeepPartial14532<NestedConfig14532>;
  path?: ConfigPaths14532;
}

const HeavyComponent14532 = memo(function HeavyComponent14532({ config }: HeavyProps14532) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14532) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14532 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14532: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14532.displayName = 'HeavyComponent14532';
export default HeavyComponent14532;
