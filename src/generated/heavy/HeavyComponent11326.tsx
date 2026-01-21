'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11326<T> = T extends (infer U)[]
  ? DeepReadonlyArray11326<U>
  : T extends object
  ? DeepReadonlyObject11326<T>
  : T;

interface DeepReadonlyArray11326<T> extends ReadonlyArray<DeepReadonly11326<T>> {}

type DeepReadonlyObject11326<T> = {
  readonly [P in keyof T]: DeepReadonly11326<T[P]>;
};

type UnionToIntersection11326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11326<T> = UnionToIntersection11326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11326<T extends unknown[], V> = [...T, V];

type TuplifyUnion11326<T, L = LastOf11326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11326<TuplifyUnion11326<Exclude<T, L>>, L>;

type DeepPartial11326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11326<T[P]> }
  : T;

type Paths11326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11326<K, Paths11326<T[K], Prev11326[D]>> : never }[keyof T]
  : never;

type Prev11326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11326 {
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

type ConfigPaths11326 = Paths11326<NestedConfig11326>;

interface HeavyProps11326 {
  config: DeepPartial11326<NestedConfig11326>;
  path?: ConfigPaths11326;
}

const HeavyComponent11326 = memo(function HeavyComponent11326({ config }: HeavyProps11326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11326.displayName = 'HeavyComponent11326';
export default HeavyComponent11326;
