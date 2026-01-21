'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14593<T> = T extends (infer U)[]
  ? DeepReadonlyArray14593<U>
  : T extends object
  ? DeepReadonlyObject14593<T>
  : T;

interface DeepReadonlyArray14593<T> extends ReadonlyArray<DeepReadonly14593<T>> {}

type DeepReadonlyObject14593<T> = {
  readonly [P in keyof T]: DeepReadonly14593<T[P]>;
};

type UnionToIntersection14593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14593<T> = UnionToIntersection14593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14593<T extends unknown[], V> = [...T, V];

type TuplifyUnion14593<T, L = LastOf14593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14593<TuplifyUnion14593<Exclude<T, L>>, L>;

type DeepPartial14593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14593<T[P]> }
  : T;

type Paths14593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14593<K, Paths14593<T[K], Prev14593[D]>> : never }[keyof T]
  : never;

type Prev14593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14593 {
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

type ConfigPaths14593 = Paths14593<NestedConfig14593>;

interface HeavyProps14593 {
  config: DeepPartial14593<NestedConfig14593>;
  path?: ConfigPaths14593;
}

const HeavyComponent14593 = memo(function HeavyComponent14593({ config }: HeavyProps14593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14593.displayName = 'HeavyComponent14593';
export default HeavyComponent14593;
