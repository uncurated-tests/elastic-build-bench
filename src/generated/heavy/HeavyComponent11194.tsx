'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11194<T> = T extends (infer U)[]
  ? DeepReadonlyArray11194<U>
  : T extends object
  ? DeepReadonlyObject11194<T>
  : T;

interface DeepReadonlyArray11194<T> extends ReadonlyArray<DeepReadonly11194<T>> {}

type DeepReadonlyObject11194<T> = {
  readonly [P in keyof T]: DeepReadonly11194<T[P]>;
};

type UnionToIntersection11194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11194<T> = UnionToIntersection11194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11194<T extends unknown[], V> = [...T, V];

type TuplifyUnion11194<T, L = LastOf11194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11194<TuplifyUnion11194<Exclude<T, L>>, L>;

type DeepPartial11194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11194<T[P]> }
  : T;

type Paths11194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11194<K, Paths11194<T[K], Prev11194[D]>> : never }[keyof T]
  : never;

type Prev11194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11194 {
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

type ConfigPaths11194 = Paths11194<NestedConfig11194>;

interface HeavyProps11194 {
  config: DeepPartial11194<NestedConfig11194>;
  path?: ConfigPaths11194;
}

const HeavyComponent11194 = memo(function HeavyComponent11194({ config }: HeavyProps11194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11194.displayName = 'HeavyComponent11194';
export default HeavyComponent11194;
