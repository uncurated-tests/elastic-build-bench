'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14652<T> = T extends (infer U)[]
  ? DeepReadonlyArray14652<U>
  : T extends object
  ? DeepReadonlyObject14652<T>
  : T;

interface DeepReadonlyArray14652<T> extends ReadonlyArray<DeepReadonly14652<T>> {}

type DeepReadonlyObject14652<T> = {
  readonly [P in keyof T]: DeepReadonly14652<T[P]>;
};

type UnionToIntersection14652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14652<T> = UnionToIntersection14652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14652<T extends unknown[], V> = [...T, V];

type TuplifyUnion14652<T, L = LastOf14652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14652<TuplifyUnion14652<Exclude<T, L>>, L>;

type DeepPartial14652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14652<T[P]> }
  : T;

type Paths14652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14652<K, Paths14652<T[K], Prev14652[D]>> : never }[keyof T]
  : never;

type Prev14652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14652 {
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

type ConfigPaths14652 = Paths14652<NestedConfig14652>;

interface HeavyProps14652 {
  config: DeepPartial14652<NestedConfig14652>;
  path?: ConfigPaths14652;
}

const HeavyComponent14652 = memo(function HeavyComponent14652({ config }: HeavyProps14652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14652.displayName = 'HeavyComponent14652';
export default HeavyComponent14652;
