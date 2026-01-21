'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11907<T> = T extends (infer U)[]
  ? DeepReadonlyArray11907<U>
  : T extends object
  ? DeepReadonlyObject11907<T>
  : T;

interface DeepReadonlyArray11907<T> extends ReadonlyArray<DeepReadonly11907<T>> {}

type DeepReadonlyObject11907<T> = {
  readonly [P in keyof T]: DeepReadonly11907<T[P]>;
};

type UnionToIntersection11907<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11907<T> = UnionToIntersection11907<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11907<T extends unknown[], V> = [...T, V];

type TuplifyUnion11907<T, L = LastOf11907<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11907<TuplifyUnion11907<Exclude<T, L>>, L>;

type DeepPartial11907<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11907<T[P]> }
  : T;

type Paths11907<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11907<K, Paths11907<T[K], Prev11907[D]>> : never }[keyof T]
  : never;

type Prev11907 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11907<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11907 {
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

type ConfigPaths11907 = Paths11907<NestedConfig11907>;

interface HeavyProps11907 {
  config: DeepPartial11907<NestedConfig11907>;
  path?: ConfigPaths11907;
}

const HeavyComponent11907 = memo(function HeavyComponent11907({ config }: HeavyProps11907) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11907) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11907 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11907: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11907.displayName = 'HeavyComponent11907';
export default HeavyComponent11907;
