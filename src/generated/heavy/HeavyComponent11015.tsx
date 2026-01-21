'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11015<T> = T extends (infer U)[]
  ? DeepReadonlyArray11015<U>
  : T extends object
  ? DeepReadonlyObject11015<T>
  : T;

interface DeepReadonlyArray11015<T> extends ReadonlyArray<DeepReadonly11015<T>> {}

type DeepReadonlyObject11015<T> = {
  readonly [P in keyof T]: DeepReadonly11015<T[P]>;
};

type UnionToIntersection11015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11015<T> = UnionToIntersection11015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11015<T extends unknown[], V> = [...T, V];

type TuplifyUnion11015<T, L = LastOf11015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11015<TuplifyUnion11015<Exclude<T, L>>, L>;

type DeepPartial11015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11015<T[P]> }
  : T;

type Paths11015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11015<K, Paths11015<T[K], Prev11015[D]>> : never }[keyof T]
  : never;

type Prev11015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11015 {
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

type ConfigPaths11015 = Paths11015<NestedConfig11015>;

interface HeavyProps11015 {
  config: DeepPartial11015<NestedConfig11015>;
  path?: ConfigPaths11015;
}

const HeavyComponent11015 = memo(function HeavyComponent11015({ config }: HeavyProps11015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11015.displayName = 'HeavyComponent11015';
export default HeavyComponent11015;
