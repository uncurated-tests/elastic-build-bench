'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14131<T> = T extends (infer U)[]
  ? DeepReadonlyArray14131<U>
  : T extends object
  ? DeepReadonlyObject14131<T>
  : T;

interface DeepReadonlyArray14131<T> extends ReadonlyArray<DeepReadonly14131<T>> {}

type DeepReadonlyObject14131<T> = {
  readonly [P in keyof T]: DeepReadonly14131<T[P]>;
};

type UnionToIntersection14131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14131<T> = UnionToIntersection14131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14131<T extends unknown[], V> = [...T, V];

type TuplifyUnion14131<T, L = LastOf14131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14131<TuplifyUnion14131<Exclude<T, L>>, L>;

type DeepPartial14131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14131<T[P]> }
  : T;

type Paths14131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14131<K, Paths14131<T[K], Prev14131[D]>> : never }[keyof T]
  : never;

type Prev14131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14131 {
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

type ConfigPaths14131 = Paths14131<NestedConfig14131>;

interface HeavyProps14131 {
  config: DeepPartial14131<NestedConfig14131>;
  path?: ConfigPaths14131;
}

const HeavyComponent14131 = memo(function HeavyComponent14131({ config }: HeavyProps14131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14131.displayName = 'HeavyComponent14131';
export default HeavyComponent14131;
