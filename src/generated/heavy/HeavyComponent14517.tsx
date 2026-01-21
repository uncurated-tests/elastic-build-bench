'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14517<T> = T extends (infer U)[]
  ? DeepReadonlyArray14517<U>
  : T extends object
  ? DeepReadonlyObject14517<T>
  : T;

interface DeepReadonlyArray14517<T> extends ReadonlyArray<DeepReadonly14517<T>> {}

type DeepReadonlyObject14517<T> = {
  readonly [P in keyof T]: DeepReadonly14517<T[P]>;
};

type UnionToIntersection14517<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14517<T> = UnionToIntersection14517<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14517<T extends unknown[], V> = [...T, V];

type TuplifyUnion14517<T, L = LastOf14517<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14517<TuplifyUnion14517<Exclude<T, L>>, L>;

type DeepPartial14517<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14517<T[P]> }
  : T;

type Paths14517<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14517<K, Paths14517<T[K], Prev14517[D]>> : never }[keyof T]
  : never;

type Prev14517 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14517<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14517 {
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

type ConfigPaths14517 = Paths14517<NestedConfig14517>;

interface HeavyProps14517 {
  config: DeepPartial14517<NestedConfig14517>;
  path?: ConfigPaths14517;
}

const HeavyComponent14517 = memo(function HeavyComponent14517({ config }: HeavyProps14517) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14517) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14517 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14517: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14517.displayName = 'HeavyComponent14517';
export default HeavyComponent14517;
