'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9555<T> = T extends (infer U)[]
  ? DeepReadonlyArray9555<U>
  : T extends object
  ? DeepReadonlyObject9555<T>
  : T;

interface DeepReadonlyArray9555<T> extends ReadonlyArray<DeepReadonly9555<T>> {}

type DeepReadonlyObject9555<T> = {
  readonly [P in keyof T]: DeepReadonly9555<T[P]>;
};

type UnionToIntersection9555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9555<T> = UnionToIntersection9555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9555<T extends unknown[], V> = [...T, V];

type TuplifyUnion9555<T, L = LastOf9555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9555<TuplifyUnion9555<Exclude<T, L>>, L>;

type DeepPartial9555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9555<T[P]> }
  : T;

type Paths9555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9555<K, Paths9555<T[K], Prev9555[D]>> : never }[keyof T]
  : never;

type Prev9555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9555 {
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

type ConfigPaths9555 = Paths9555<NestedConfig9555>;

interface HeavyProps9555 {
  config: DeepPartial9555<NestedConfig9555>;
  path?: ConfigPaths9555;
}

const HeavyComponent9555 = memo(function HeavyComponent9555({ config }: HeavyProps9555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9555.displayName = 'HeavyComponent9555';
export default HeavyComponent9555;
