'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11905<T> = T extends (infer U)[]
  ? DeepReadonlyArray11905<U>
  : T extends object
  ? DeepReadonlyObject11905<T>
  : T;

interface DeepReadonlyArray11905<T> extends ReadonlyArray<DeepReadonly11905<T>> {}

type DeepReadonlyObject11905<T> = {
  readonly [P in keyof T]: DeepReadonly11905<T[P]>;
};

type UnionToIntersection11905<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11905<T> = UnionToIntersection11905<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11905<T extends unknown[], V> = [...T, V];

type TuplifyUnion11905<T, L = LastOf11905<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11905<TuplifyUnion11905<Exclude<T, L>>, L>;

type DeepPartial11905<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11905<T[P]> }
  : T;

type Paths11905<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11905<K, Paths11905<T[K], Prev11905[D]>> : never }[keyof T]
  : never;

type Prev11905 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11905<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11905 {
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

type ConfigPaths11905 = Paths11905<NestedConfig11905>;

interface HeavyProps11905 {
  config: DeepPartial11905<NestedConfig11905>;
  path?: ConfigPaths11905;
}

const HeavyComponent11905 = memo(function HeavyComponent11905({ config }: HeavyProps11905) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11905) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11905 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11905: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11905.displayName = 'HeavyComponent11905';
export default HeavyComponent11905;
