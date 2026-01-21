'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14015<T> = T extends (infer U)[]
  ? DeepReadonlyArray14015<U>
  : T extends object
  ? DeepReadonlyObject14015<T>
  : T;

interface DeepReadonlyArray14015<T> extends ReadonlyArray<DeepReadonly14015<T>> {}

type DeepReadonlyObject14015<T> = {
  readonly [P in keyof T]: DeepReadonly14015<T[P]>;
};

type UnionToIntersection14015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14015<T> = UnionToIntersection14015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14015<T extends unknown[], V> = [...T, V];

type TuplifyUnion14015<T, L = LastOf14015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14015<TuplifyUnion14015<Exclude<T, L>>, L>;

type DeepPartial14015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14015<T[P]> }
  : T;

type Paths14015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14015<K, Paths14015<T[K], Prev14015[D]>> : never }[keyof T]
  : never;

type Prev14015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14015 {
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

type ConfigPaths14015 = Paths14015<NestedConfig14015>;

interface HeavyProps14015 {
  config: DeepPartial14015<NestedConfig14015>;
  path?: ConfigPaths14015;
}

const HeavyComponent14015 = memo(function HeavyComponent14015({ config }: HeavyProps14015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14015.displayName = 'HeavyComponent14015';
export default HeavyComponent14015;
