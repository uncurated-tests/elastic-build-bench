'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11773<T> = T extends (infer U)[]
  ? DeepReadonlyArray11773<U>
  : T extends object
  ? DeepReadonlyObject11773<T>
  : T;

interface DeepReadonlyArray11773<T> extends ReadonlyArray<DeepReadonly11773<T>> {}

type DeepReadonlyObject11773<T> = {
  readonly [P in keyof T]: DeepReadonly11773<T[P]>;
};

type UnionToIntersection11773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11773<T> = UnionToIntersection11773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11773<T extends unknown[], V> = [...T, V];

type TuplifyUnion11773<T, L = LastOf11773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11773<TuplifyUnion11773<Exclude<T, L>>, L>;

type DeepPartial11773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11773<T[P]> }
  : T;

type Paths11773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11773<K, Paths11773<T[K], Prev11773[D]>> : never }[keyof T]
  : never;

type Prev11773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11773 {
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

type ConfigPaths11773 = Paths11773<NestedConfig11773>;

interface HeavyProps11773 {
  config: DeepPartial11773<NestedConfig11773>;
  path?: ConfigPaths11773;
}

const HeavyComponent11773 = memo(function HeavyComponent11773({ config }: HeavyProps11773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11773.displayName = 'HeavyComponent11773';
export default HeavyComponent11773;
