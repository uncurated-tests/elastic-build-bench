'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11205<T> = T extends (infer U)[]
  ? DeepReadonlyArray11205<U>
  : T extends object
  ? DeepReadonlyObject11205<T>
  : T;

interface DeepReadonlyArray11205<T> extends ReadonlyArray<DeepReadonly11205<T>> {}

type DeepReadonlyObject11205<T> = {
  readonly [P in keyof T]: DeepReadonly11205<T[P]>;
};

type UnionToIntersection11205<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11205<T> = UnionToIntersection11205<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11205<T extends unknown[], V> = [...T, V];

type TuplifyUnion11205<T, L = LastOf11205<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11205<TuplifyUnion11205<Exclude<T, L>>, L>;

type DeepPartial11205<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11205<T[P]> }
  : T;

type Paths11205<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11205<K, Paths11205<T[K], Prev11205[D]>> : never }[keyof T]
  : never;

type Prev11205 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11205<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11205 {
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

type ConfigPaths11205 = Paths11205<NestedConfig11205>;

interface HeavyProps11205 {
  config: DeepPartial11205<NestedConfig11205>;
  path?: ConfigPaths11205;
}

const HeavyComponent11205 = memo(function HeavyComponent11205({ config }: HeavyProps11205) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11205) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11205 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11205: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11205.displayName = 'HeavyComponent11205';
export default HeavyComponent11205;
