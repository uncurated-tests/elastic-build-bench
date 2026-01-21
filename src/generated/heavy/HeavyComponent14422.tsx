'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14422<T> = T extends (infer U)[]
  ? DeepReadonlyArray14422<U>
  : T extends object
  ? DeepReadonlyObject14422<T>
  : T;

interface DeepReadonlyArray14422<T> extends ReadonlyArray<DeepReadonly14422<T>> {}

type DeepReadonlyObject14422<T> = {
  readonly [P in keyof T]: DeepReadonly14422<T[P]>;
};

type UnionToIntersection14422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14422<T> = UnionToIntersection14422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14422<T extends unknown[], V> = [...T, V];

type TuplifyUnion14422<T, L = LastOf14422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14422<TuplifyUnion14422<Exclude<T, L>>, L>;

type DeepPartial14422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14422<T[P]> }
  : T;

type Paths14422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14422<K, Paths14422<T[K], Prev14422[D]>> : never }[keyof T]
  : never;

type Prev14422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14422 {
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

type ConfigPaths14422 = Paths14422<NestedConfig14422>;

interface HeavyProps14422 {
  config: DeepPartial14422<NestedConfig14422>;
  path?: ConfigPaths14422;
}

const HeavyComponent14422 = memo(function HeavyComponent14422({ config }: HeavyProps14422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14422.displayName = 'HeavyComponent14422';
export default HeavyComponent14422;
