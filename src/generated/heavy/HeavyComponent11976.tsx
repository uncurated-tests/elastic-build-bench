'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11976<T> = T extends (infer U)[]
  ? DeepReadonlyArray11976<U>
  : T extends object
  ? DeepReadonlyObject11976<T>
  : T;

interface DeepReadonlyArray11976<T> extends ReadonlyArray<DeepReadonly11976<T>> {}

type DeepReadonlyObject11976<T> = {
  readonly [P in keyof T]: DeepReadonly11976<T[P]>;
};

type UnionToIntersection11976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11976<T> = UnionToIntersection11976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11976<T extends unknown[], V> = [...T, V];

type TuplifyUnion11976<T, L = LastOf11976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11976<TuplifyUnion11976<Exclude<T, L>>, L>;

type DeepPartial11976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11976<T[P]> }
  : T;

type Paths11976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11976<K, Paths11976<T[K], Prev11976[D]>> : never }[keyof T]
  : never;

type Prev11976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11976 {
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

type ConfigPaths11976 = Paths11976<NestedConfig11976>;

interface HeavyProps11976 {
  config: DeepPartial11976<NestedConfig11976>;
  path?: ConfigPaths11976;
}

const HeavyComponent11976 = memo(function HeavyComponent11976({ config }: HeavyProps11976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11976.displayName = 'HeavyComponent11976';
export default HeavyComponent11976;
