'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14716<T> = T extends (infer U)[]
  ? DeepReadonlyArray14716<U>
  : T extends object
  ? DeepReadonlyObject14716<T>
  : T;

interface DeepReadonlyArray14716<T> extends ReadonlyArray<DeepReadonly14716<T>> {}

type DeepReadonlyObject14716<T> = {
  readonly [P in keyof T]: DeepReadonly14716<T[P]>;
};

type UnionToIntersection14716<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14716<T> = UnionToIntersection14716<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14716<T extends unknown[], V> = [...T, V];

type TuplifyUnion14716<T, L = LastOf14716<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14716<TuplifyUnion14716<Exclude<T, L>>, L>;

type DeepPartial14716<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14716<T[P]> }
  : T;

type Paths14716<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14716<K, Paths14716<T[K], Prev14716[D]>> : never }[keyof T]
  : never;

type Prev14716 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14716<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14716 {
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

type ConfigPaths14716 = Paths14716<NestedConfig14716>;

interface HeavyProps14716 {
  config: DeepPartial14716<NestedConfig14716>;
  path?: ConfigPaths14716;
}

const HeavyComponent14716 = memo(function HeavyComponent14716({ config }: HeavyProps14716) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14716) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14716 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14716: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14716.displayName = 'HeavyComponent14716';
export default HeavyComponent14716;
