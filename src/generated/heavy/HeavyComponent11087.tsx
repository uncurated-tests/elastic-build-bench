'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11087<T> = T extends (infer U)[]
  ? DeepReadonlyArray11087<U>
  : T extends object
  ? DeepReadonlyObject11087<T>
  : T;

interface DeepReadonlyArray11087<T> extends ReadonlyArray<DeepReadonly11087<T>> {}

type DeepReadonlyObject11087<T> = {
  readonly [P in keyof T]: DeepReadonly11087<T[P]>;
};

type UnionToIntersection11087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11087<T> = UnionToIntersection11087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11087<T extends unknown[], V> = [...T, V];

type TuplifyUnion11087<T, L = LastOf11087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11087<TuplifyUnion11087<Exclude<T, L>>, L>;

type DeepPartial11087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11087<T[P]> }
  : T;

type Paths11087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11087<K, Paths11087<T[K], Prev11087[D]>> : never }[keyof T]
  : never;

type Prev11087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11087 {
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

type ConfigPaths11087 = Paths11087<NestedConfig11087>;

interface HeavyProps11087 {
  config: DeepPartial11087<NestedConfig11087>;
  path?: ConfigPaths11087;
}

const HeavyComponent11087 = memo(function HeavyComponent11087({ config }: HeavyProps11087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11087.displayName = 'HeavyComponent11087';
export default HeavyComponent11087;
