'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly275<T> = T extends (infer U)[]
  ? DeepReadonlyArray275<U>
  : T extends object
  ? DeepReadonlyObject275<T>
  : T;

interface DeepReadonlyArray275<T> extends ReadonlyArray<DeepReadonly275<T>> {}

type DeepReadonlyObject275<T> = {
  readonly [P in keyof T]: DeepReadonly275<T[P]>;
};

type UnionToIntersection275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf275<T> = UnionToIntersection275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push275<T extends unknown[], V> = [...T, V];

type TuplifyUnion275<T, L = LastOf275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push275<TuplifyUnion275<Exclude<T, L>>, L>;

type DeepPartial275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial275<T[P]> }
  : T;

type Paths275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join275<K, Paths275<T[K], Prev275[D]>> : never }[keyof T]
  : never;

type Prev275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig275 {
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

type ConfigPaths275 = Paths275<NestedConfig275>;

interface HeavyProps275 {
  config: DeepPartial275<NestedConfig275>;
  path?: ConfigPaths275;
}

const HeavyComponent275 = memo(function HeavyComponent275({ config }: HeavyProps275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent275.displayName = 'HeavyComponent275';
export default HeavyComponent275;
