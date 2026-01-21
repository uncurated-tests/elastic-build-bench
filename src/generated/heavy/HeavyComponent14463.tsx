'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14463<T> = T extends (infer U)[]
  ? DeepReadonlyArray14463<U>
  : T extends object
  ? DeepReadonlyObject14463<T>
  : T;

interface DeepReadonlyArray14463<T> extends ReadonlyArray<DeepReadonly14463<T>> {}

type DeepReadonlyObject14463<T> = {
  readonly [P in keyof T]: DeepReadonly14463<T[P]>;
};

type UnionToIntersection14463<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14463<T> = UnionToIntersection14463<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14463<T extends unknown[], V> = [...T, V];

type TuplifyUnion14463<T, L = LastOf14463<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14463<TuplifyUnion14463<Exclude<T, L>>, L>;

type DeepPartial14463<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14463<T[P]> }
  : T;

type Paths14463<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14463<K, Paths14463<T[K], Prev14463[D]>> : never }[keyof T]
  : never;

type Prev14463 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14463<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14463 {
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

type ConfigPaths14463 = Paths14463<NestedConfig14463>;

interface HeavyProps14463 {
  config: DeepPartial14463<NestedConfig14463>;
  path?: ConfigPaths14463;
}

const HeavyComponent14463 = memo(function HeavyComponent14463({ config }: HeavyProps14463) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14463) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14463 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14463: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14463.displayName = 'HeavyComponent14463';
export default HeavyComponent14463;
