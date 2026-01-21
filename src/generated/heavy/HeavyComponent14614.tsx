'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14614<T> = T extends (infer U)[]
  ? DeepReadonlyArray14614<U>
  : T extends object
  ? DeepReadonlyObject14614<T>
  : T;

interface DeepReadonlyArray14614<T> extends ReadonlyArray<DeepReadonly14614<T>> {}

type DeepReadonlyObject14614<T> = {
  readonly [P in keyof T]: DeepReadonly14614<T[P]>;
};

type UnionToIntersection14614<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14614<T> = UnionToIntersection14614<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14614<T extends unknown[], V> = [...T, V];

type TuplifyUnion14614<T, L = LastOf14614<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14614<TuplifyUnion14614<Exclude<T, L>>, L>;

type DeepPartial14614<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14614<T[P]> }
  : T;

type Paths14614<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14614<K, Paths14614<T[K], Prev14614[D]>> : never }[keyof T]
  : never;

type Prev14614 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14614<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14614 {
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

type ConfigPaths14614 = Paths14614<NestedConfig14614>;

interface HeavyProps14614 {
  config: DeepPartial14614<NestedConfig14614>;
  path?: ConfigPaths14614;
}

const HeavyComponent14614 = memo(function HeavyComponent14614({ config }: HeavyProps14614) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14614) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14614 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14614: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14614.displayName = 'HeavyComponent14614';
export default HeavyComponent14614;
