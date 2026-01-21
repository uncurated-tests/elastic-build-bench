'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11993<T> = T extends (infer U)[]
  ? DeepReadonlyArray11993<U>
  : T extends object
  ? DeepReadonlyObject11993<T>
  : T;

interface DeepReadonlyArray11993<T> extends ReadonlyArray<DeepReadonly11993<T>> {}

type DeepReadonlyObject11993<T> = {
  readonly [P in keyof T]: DeepReadonly11993<T[P]>;
};

type UnionToIntersection11993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11993<T> = UnionToIntersection11993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11993<T extends unknown[], V> = [...T, V];

type TuplifyUnion11993<T, L = LastOf11993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11993<TuplifyUnion11993<Exclude<T, L>>, L>;

type DeepPartial11993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11993<T[P]> }
  : T;

type Paths11993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11993<K, Paths11993<T[K], Prev11993[D]>> : never }[keyof T]
  : never;

type Prev11993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11993 {
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

type ConfigPaths11993 = Paths11993<NestedConfig11993>;

interface HeavyProps11993 {
  config: DeepPartial11993<NestedConfig11993>;
  path?: ConfigPaths11993;
}

const HeavyComponent11993 = memo(function HeavyComponent11993({ config }: HeavyProps11993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11993.displayName = 'HeavyComponent11993';
export default HeavyComponent11993;
