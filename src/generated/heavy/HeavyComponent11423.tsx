'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11423<T> = T extends (infer U)[]
  ? DeepReadonlyArray11423<U>
  : T extends object
  ? DeepReadonlyObject11423<T>
  : T;

interface DeepReadonlyArray11423<T> extends ReadonlyArray<DeepReadonly11423<T>> {}

type DeepReadonlyObject11423<T> = {
  readonly [P in keyof T]: DeepReadonly11423<T[P]>;
};

type UnionToIntersection11423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11423<T> = UnionToIntersection11423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11423<T extends unknown[], V> = [...T, V];

type TuplifyUnion11423<T, L = LastOf11423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11423<TuplifyUnion11423<Exclude<T, L>>, L>;

type DeepPartial11423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11423<T[P]> }
  : T;

type Paths11423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11423<K, Paths11423<T[K], Prev11423[D]>> : never }[keyof T]
  : never;

type Prev11423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11423 {
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

type ConfigPaths11423 = Paths11423<NestedConfig11423>;

interface HeavyProps11423 {
  config: DeepPartial11423<NestedConfig11423>;
  path?: ConfigPaths11423;
}

const HeavyComponent11423 = memo(function HeavyComponent11423({ config }: HeavyProps11423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11423.displayName = 'HeavyComponent11423';
export default HeavyComponent11423;
