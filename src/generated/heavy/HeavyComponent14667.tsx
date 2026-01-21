'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14667<T> = T extends (infer U)[]
  ? DeepReadonlyArray14667<U>
  : T extends object
  ? DeepReadonlyObject14667<T>
  : T;

interface DeepReadonlyArray14667<T> extends ReadonlyArray<DeepReadonly14667<T>> {}

type DeepReadonlyObject14667<T> = {
  readonly [P in keyof T]: DeepReadonly14667<T[P]>;
};

type UnionToIntersection14667<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14667<T> = UnionToIntersection14667<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14667<T extends unknown[], V> = [...T, V];

type TuplifyUnion14667<T, L = LastOf14667<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14667<TuplifyUnion14667<Exclude<T, L>>, L>;

type DeepPartial14667<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14667<T[P]> }
  : T;

type Paths14667<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14667<K, Paths14667<T[K], Prev14667[D]>> : never }[keyof T]
  : never;

type Prev14667 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14667<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14667 {
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

type ConfigPaths14667 = Paths14667<NestedConfig14667>;

interface HeavyProps14667 {
  config: DeepPartial14667<NestedConfig14667>;
  path?: ConfigPaths14667;
}

const HeavyComponent14667 = memo(function HeavyComponent14667({ config }: HeavyProps14667) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14667) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14667 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14667: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14667.displayName = 'HeavyComponent14667';
export default HeavyComponent14667;
