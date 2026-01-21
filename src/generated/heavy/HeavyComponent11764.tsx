'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11764<T> = T extends (infer U)[]
  ? DeepReadonlyArray11764<U>
  : T extends object
  ? DeepReadonlyObject11764<T>
  : T;

interface DeepReadonlyArray11764<T> extends ReadonlyArray<DeepReadonly11764<T>> {}

type DeepReadonlyObject11764<T> = {
  readonly [P in keyof T]: DeepReadonly11764<T[P]>;
};

type UnionToIntersection11764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11764<T> = UnionToIntersection11764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11764<T extends unknown[], V> = [...T, V];

type TuplifyUnion11764<T, L = LastOf11764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11764<TuplifyUnion11764<Exclude<T, L>>, L>;

type DeepPartial11764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11764<T[P]> }
  : T;

type Paths11764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11764<K, Paths11764<T[K], Prev11764[D]>> : never }[keyof T]
  : never;

type Prev11764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11764 {
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

type ConfigPaths11764 = Paths11764<NestedConfig11764>;

interface HeavyProps11764 {
  config: DeepPartial11764<NestedConfig11764>;
  path?: ConfigPaths11764;
}

const HeavyComponent11764 = memo(function HeavyComponent11764({ config }: HeavyProps11764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11764.displayName = 'HeavyComponent11764';
export default HeavyComponent11764;
