'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11223<T> = T extends (infer U)[]
  ? DeepReadonlyArray11223<U>
  : T extends object
  ? DeepReadonlyObject11223<T>
  : T;

interface DeepReadonlyArray11223<T> extends ReadonlyArray<DeepReadonly11223<T>> {}

type DeepReadonlyObject11223<T> = {
  readonly [P in keyof T]: DeepReadonly11223<T[P]>;
};

type UnionToIntersection11223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11223<T> = UnionToIntersection11223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11223<T extends unknown[], V> = [...T, V];

type TuplifyUnion11223<T, L = LastOf11223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11223<TuplifyUnion11223<Exclude<T, L>>, L>;

type DeepPartial11223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11223<T[P]> }
  : T;

type Paths11223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11223<K, Paths11223<T[K], Prev11223[D]>> : never }[keyof T]
  : never;

type Prev11223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11223 {
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

type ConfigPaths11223 = Paths11223<NestedConfig11223>;

interface HeavyProps11223 {
  config: DeepPartial11223<NestedConfig11223>;
  path?: ConfigPaths11223;
}

const HeavyComponent11223 = memo(function HeavyComponent11223({ config }: HeavyProps11223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11223.displayName = 'HeavyComponent11223';
export default HeavyComponent11223;
