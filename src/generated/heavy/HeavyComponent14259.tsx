'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14259<T> = T extends (infer U)[]
  ? DeepReadonlyArray14259<U>
  : T extends object
  ? DeepReadonlyObject14259<T>
  : T;

interface DeepReadonlyArray14259<T> extends ReadonlyArray<DeepReadonly14259<T>> {}

type DeepReadonlyObject14259<T> = {
  readonly [P in keyof T]: DeepReadonly14259<T[P]>;
};

type UnionToIntersection14259<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14259<T> = UnionToIntersection14259<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14259<T extends unknown[], V> = [...T, V];

type TuplifyUnion14259<T, L = LastOf14259<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14259<TuplifyUnion14259<Exclude<T, L>>, L>;

type DeepPartial14259<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14259<T[P]> }
  : T;

type Paths14259<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14259<K, Paths14259<T[K], Prev14259[D]>> : never }[keyof T]
  : never;

type Prev14259 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14259<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14259 {
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

type ConfigPaths14259 = Paths14259<NestedConfig14259>;

interface HeavyProps14259 {
  config: DeepPartial14259<NestedConfig14259>;
  path?: ConfigPaths14259;
}

const HeavyComponent14259 = memo(function HeavyComponent14259({ config }: HeavyProps14259) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14259) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14259 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14259: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14259.displayName = 'HeavyComponent14259';
export default HeavyComponent14259;
