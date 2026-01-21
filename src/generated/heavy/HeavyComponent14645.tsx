'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14645<T> = T extends (infer U)[]
  ? DeepReadonlyArray14645<U>
  : T extends object
  ? DeepReadonlyObject14645<T>
  : T;

interface DeepReadonlyArray14645<T> extends ReadonlyArray<DeepReadonly14645<T>> {}

type DeepReadonlyObject14645<T> = {
  readonly [P in keyof T]: DeepReadonly14645<T[P]>;
};

type UnionToIntersection14645<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14645<T> = UnionToIntersection14645<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14645<T extends unknown[], V> = [...T, V];

type TuplifyUnion14645<T, L = LastOf14645<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14645<TuplifyUnion14645<Exclude<T, L>>, L>;

type DeepPartial14645<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14645<T[P]> }
  : T;

type Paths14645<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14645<K, Paths14645<T[K], Prev14645[D]>> : never }[keyof T]
  : never;

type Prev14645 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14645<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14645 {
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

type ConfigPaths14645 = Paths14645<NestedConfig14645>;

interface HeavyProps14645 {
  config: DeepPartial14645<NestedConfig14645>;
  path?: ConfigPaths14645;
}

const HeavyComponent14645 = memo(function HeavyComponent14645({ config }: HeavyProps14645) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14645) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14645 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14645: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14645.displayName = 'HeavyComponent14645';
export default HeavyComponent14645;
