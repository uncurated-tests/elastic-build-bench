'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14634<T> = T extends (infer U)[]
  ? DeepReadonlyArray14634<U>
  : T extends object
  ? DeepReadonlyObject14634<T>
  : T;

interface DeepReadonlyArray14634<T> extends ReadonlyArray<DeepReadonly14634<T>> {}

type DeepReadonlyObject14634<T> = {
  readonly [P in keyof T]: DeepReadonly14634<T[P]>;
};

type UnionToIntersection14634<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14634<T> = UnionToIntersection14634<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14634<T extends unknown[], V> = [...T, V];

type TuplifyUnion14634<T, L = LastOf14634<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14634<TuplifyUnion14634<Exclude<T, L>>, L>;

type DeepPartial14634<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14634<T[P]> }
  : T;

type Paths14634<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14634<K, Paths14634<T[K], Prev14634[D]>> : never }[keyof T]
  : never;

type Prev14634 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14634<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14634 {
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

type ConfigPaths14634 = Paths14634<NestedConfig14634>;

interface HeavyProps14634 {
  config: DeepPartial14634<NestedConfig14634>;
  path?: ConfigPaths14634;
}

const HeavyComponent14634 = memo(function HeavyComponent14634({ config }: HeavyProps14634) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14634) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14634 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14634: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14634.displayName = 'HeavyComponent14634';
export default HeavyComponent14634;
