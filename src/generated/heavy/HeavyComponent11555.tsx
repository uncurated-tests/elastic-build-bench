'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11555<T> = T extends (infer U)[]
  ? DeepReadonlyArray11555<U>
  : T extends object
  ? DeepReadonlyObject11555<T>
  : T;

interface DeepReadonlyArray11555<T> extends ReadonlyArray<DeepReadonly11555<T>> {}

type DeepReadonlyObject11555<T> = {
  readonly [P in keyof T]: DeepReadonly11555<T[P]>;
};

type UnionToIntersection11555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11555<T> = UnionToIntersection11555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11555<T extends unknown[], V> = [...T, V];

type TuplifyUnion11555<T, L = LastOf11555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11555<TuplifyUnion11555<Exclude<T, L>>, L>;

type DeepPartial11555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11555<T[P]> }
  : T;

type Paths11555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11555<K, Paths11555<T[K], Prev11555[D]>> : never }[keyof T]
  : never;

type Prev11555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11555 {
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

type ConfigPaths11555 = Paths11555<NestedConfig11555>;

interface HeavyProps11555 {
  config: DeepPartial11555<NestedConfig11555>;
  path?: ConfigPaths11555;
}

const HeavyComponent11555 = memo(function HeavyComponent11555({ config }: HeavyProps11555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11555.displayName = 'HeavyComponent11555';
export default HeavyComponent11555;
