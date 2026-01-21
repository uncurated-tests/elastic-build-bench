'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly76<T> = T extends (infer U)[]
  ? DeepReadonlyArray76<U>
  : T extends object
  ? DeepReadonlyObject76<T>
  : T;

interface DeepReadonlyArray76<T> extends ReadonlyArray<DeepReadonly76<T>> {}

type DeepReadonlyObject76<T> = {
  readonly [P in keyof T]: DeepReadonly76<T[P]>;
};

type UnionToIntersection76<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf76<T> = UnionToIntersection76<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push76<T extends unknown[], V> = [...T, V];

type TuplifyUnion76<T, L = LastOf76<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push76<TuplifyUnion76<Exclude<T, L>>, L>;

type DeepPartial76<T> = T extends object
  ? { [P in keyof T]?: DeepPartial76<T[P]> }
  : T;

type Paths76<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join76<K, Paths76<T[K], Prev76[D]>> : never }[keyof T]
  : never;

type Prev76 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join76<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig76 {
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

type ConfigPaths76 = Paths76<NestedConfig76>;

interface HeavyProps76 {
  config: DeepPartial76<NestedConfig76>;
  path?: ConfigPaths76;
}

const HeavyComponent76 = memo(function HeavyComponent76({ config }: HeavyProps76) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 76) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-76 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H76: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent76.displayName = 'HeavyComponent76';
export default HeavyComponent76;
