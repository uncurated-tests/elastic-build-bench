'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14964<T> = T extends (infer U)[]
  ? DeepReadonlyArray14964<U>
  : T extends object
  ? DeepReadonlyObject14964<T>
  : T;

interface DeepReadonlyArray14964<T> extends ReadonlyArray<DeepReadonly14964<T>> {}

type DeepReadonlyObject14964<T> = {
  readonly [P in keyof T]: DeepReadonly14964<T[P]>;
};

type UnionToIntersection14964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14964<T> = UnionToIntersection14964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14964<T extends unknown[], V> = [...T, V];

type TuplifyUnion14964<T, L = LastOf14964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14964<TuplifyUnion14964<Exclude<T, L>>, L>;

type DeepPartial14964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14964<T[P]> }
  : T;

type Paths14964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14964<K, Paths14964<T[K], Prev14964[D]>> : never }[keyof T]
  : never;

type Prev14964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14964 {
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

type ConfigPaths14964 = Paths14964<NestedConfig14964>;

interface HeavyProps14964 {
  config: DeepPartial14964<NestedConfig14964>;
  path?: ConfigPaths14964;
}

const HeavyComponent14964 = memo(function HeavyComponent14964({ config }: HeavyProps14964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14964.displayName = 'HeavyComponent14964';
export default HeavyComponent14964;
