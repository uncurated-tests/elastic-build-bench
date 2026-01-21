'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14491<T> = T extends (infer U)[]
  ? DeepReadonlyArray14491<U>
  : T extends object
  ? DeepReadonlyObject14491<T>
  : T;

interface DeepReadonlyArray14491<T> extends ReadonlyArray<DeepReadonly14491<T>> {}

type DeepReadonlyObject14491<T> = {
  readonly [P in keyof T]: DeepReadonly14491<T[P]>;
};

type UnionToIntersection14491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14491<T> = UnionToIntersection14491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14491<T extends unknown[], V> = [...T, V];

type TuplifyUnion14491<T, L = LastOf14491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14491<TuplifyUnion14491<Exclude<T, L>>, L>;

type DeepPartial14491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14491<T[P]> }
  : T;

type Paths14491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14491<K, Paths14491<T[K], Prev14491[D]>> : never }[keyof T]
  : never;

type Prev14491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14491 {
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

type ConfigPaths14491 = Paths14491<NestedConfig14491>;

interface HeavyProps14491 {
  config: DeepPartial14491<NestedConfig14491>;
  path?: ConfigPaths14491;
}

const HeavyComponent14491 = memo(function HeavyComponent14491({ config }: HeavyProps14491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14491.displayName = 'HeavyComponent14491';
export default HeavyComponent14491;
