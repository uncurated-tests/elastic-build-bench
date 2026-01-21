'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14976<T> = T extends (infer U)[]
  ? DeepReadonlyArray14976<U>
  : T extends object
  ? DeepReadonlyObject14976<T>
  : T;

interface DeepReadonlyArray14976<T> extends ReadonlyArray<DeepReadonly14976<T>> {}

type DeepReadonlyObject14976<T> = {
  readonly [P in keyof T]: DeepReadonly14976<T[P]>;
};

type UnionToIntersection14976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14976<T> = UnionToIntersection14976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14976<T extends unknown[], V> = [...T, V];

type TuplifyUnion14976<T, L = LastOf14976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14976<TuplifyUnion14976<Exclude<T, L>>, L>;

type DeepPartial14976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14976<T[P]> }
  : T;

type Paths14976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14976<K, Paths14976<T[K], Prev14976[D]>> : never }[keyof T]
  : never;

type Prev14976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14976 {
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

type ConfigPaths14976 = Paths14976<NestedConfig14976>;

interface HeavyProps14976 {
  config: DeepPartial14976<NestedConfig14976>;
  path?: ConfigPaths14976;
}

const HeavyComponent14976 = memo(function HeavyComponent14976({ config }: HeavyProps14976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14976.displayName = 'HeavyComponent14976';
export default HeavyComponent14976;
