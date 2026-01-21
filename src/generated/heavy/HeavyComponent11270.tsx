'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11270<T> = T extends (infer U)[]
  ? DeepReadonlyArray11270<U>
  : T extends object
  ? DeepReadonlyObject11270<T>
  : T;

interface DeepReadonlyArray11270<T> extends ReadonlyArray<DeepReadonly11270<T>> {}

type DeepReadonlyObject11270<T> = {
  readonly [P in keyof T]: DeepReadonly11270<T[P]>;
};

type UnionToIntersection11270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11270<T> = UnionToIntersection11270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11270<T extends unknown[], V> = [...T, V];

type TuplifyUnion11270<T, L = LastOf11270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11270<TuplifyUnion11270<Exclude<T, L>>, L>;

type DeepPartial11270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11270<T[P]> }
  : T;

type Paths11270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11270<K, Paths11270<T[K], Prev11270[D]>> : never }[keyof T]
  : never;

type Prev11270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11270 {
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

type ConfigPaths11270 = Paths11270<NestedConfig11270>;

interface HeavyProps11270 {
  config: DeepPartial11270<NestedConfig11270>;
  path?: ConfigPaths11270;
}

const HeavyComponent11270 = memo(function HeavyComponent11270({ config }: HeavyProps11270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11270.displayName = 'HeavyComponent11270';
export default HeavyComponent11270;
