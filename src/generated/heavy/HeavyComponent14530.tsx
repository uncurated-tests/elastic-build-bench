'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14530<T> = T extends (infer U)[]
  ? DeepReadonlyArray14530<U>
  : T extends object
  ? DeepReadonlyObject14530<T>
  : T;

interface DeepReadonlyArray14530<T> extends ReadonlyArray<DeepReadonly14530<T>> {}

type DeepReadonlyObject14530<T> = {
  readonly [P in keyof T]: DeepReadonly14530<T[P]>;
};

type UnionToIntersection14530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14530<T> = UnionToIntersection14530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14530<T extends unknown[], V> = [...T, V];

type TuplifyUnion14530<T, L = LastOf14530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14530<TuplifyUnion14530<Exclude<T, L>>, L>;

type DeepPartial14530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14530<T[P]> }
  : T;

type Paths14530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14530<K, Paths14530<T[K], Prev14530[D]>> : never }[keyof T]
  : never;

type Prev14530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14530 {
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

type ConfigPaths14530 = Paths14530<NestedConfig14530>;

interface HeavyProps14530 {
  config: DeepPartial14530<NestedConfig14530>;
  path?: ConfigPaths14530;
}

const HeavyComponent14530 = memo(function HeavyComponent14530({ config }: HeavyProps14530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14530.displayName = 'HeavyComponent14530';
export default HeavyComponent14530;
