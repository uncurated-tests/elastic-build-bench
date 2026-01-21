'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14392<T> = T extends (infer U)[]
  ? DeepReadonlyArray14392<U>
  : T extends object
  ? DeepReadonlyObject14392<T>
  : T;

interface DeepReadonlyArray14392<T> extends ReadonlyArray<DeepReadonly14392<T>> {}

type DeepReadonlyObject14392<T> = {
  readonly [P in keyof T]: DeepReadonly14392<T[P]>;
};

type UnionToIntersection14392<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14392<T> = UnionToIntersection14392<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14392<T extends unknown[], V> = [...T, V];

type TuplifyUnion14392<T, L = LastOf14392<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14392<TuplifyUnion14392<Exclude<T, L>>, L>;

type DeepPartial14392<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14392<T[P]> }
  : T;

type Paths14392<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14392<K, Paths14392<T[K], Prev14392[D]>> : never }[keyof T]
  : never;

type Prev14392 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14392<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14392 {
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

type ConfigPaths14392 = Paths14392<NestedConfig14392>;

interface HeavyProps14392 {
  config: DeepPartial14392<NestedConfig14392>;
  path?: ConfigPaths14392;
}

const HeavyComponent14392 = memo(function HeavyComponent14392({ config }: HeavyProps14392) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14392) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14392 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14392: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14392.displayName = 'HeavyComponent14392';
export default HeavyComponent14392;
