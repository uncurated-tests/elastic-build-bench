'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14206<T> = T extends (infer U)[]
  ? DeepReadonlyArray14206<U>
  : T extends object
  ? DeepReadonlyObject14206<T>
  : T;

interface DeepReadonlyArray14206<T> extends ReadonlyArray<DeepReadonly14206<T>> {}

type DeepReadonlyObject14206<T> = {
  readonly [P in keyof T]: DeepReadonly14206<T[P]>;
};

type UnionToIntersection14206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14206<T> = UnionToIntersection14206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14206<T extends unknown[], V> = [...T, V];

type TuplifyUnion14206<T, L = LastOf14206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14206<TuplifyUnion14206<Exclude<T, L>>, L>;

type DeepPartial14206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14206<T[P]> }
  : T;

type Paths14206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14206<K, Paths14206<T[K], Prev14206[D]>> : never }[keyof T]
  : never;

type Prev14206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14206 {
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

type ConfigPaths14206 = Paths14206<NestedConfig14206>;

interface HeavyProps14206 {
  config: DeepPartial14206<NestedConfig14206>;
  path?: ConfigPaths14206;
}

const HeavyComponent14206 = memo(function HeavyComponent14206({ config }: HeavyProps14206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14206.displayName = 'HeavyComponent14206';
export default HeavyComponent14206;
